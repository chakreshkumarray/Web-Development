import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import FramedImage from "../FramedImage";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    setError("");
    setSaving(true);
    try {
      if (post) {
        const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        if (file) {
          appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        } else {
          setError("Couldn't update the post. Check the browser console (F12) for details.");
        }
      } else {
        if (!userData) {
          setError("Your session isn't loaded. Log out, log in again, and retry.");
          return;
        }

        const file = await appwriteService.uploadFile(data.image[0]);
        if (!file) {
          setError("Image upload failed. Check your Bucket ID and bucket permissions in Appwrite.");
          return;
        }

        const dbPost = await appwriteService.createPost({
          ...data,
          featuredImage: file.$id,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        } else {
          appwriteService.deleteFile(file.$id);
          setError("Couldn't save the post. Check the collection attributes and permissions in Appwrite.");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z\d\s]+/g, "-")
        .replace(/\s+/g, "-")
        .replace(/^-+/, "")
        .slice(0, 36);

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-1"
          {...register("title", { required: true })}
        />
        {errors.title && <p className="text-red-600 text-sm mb-3">Enter a title.</p>}

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-1 mt-3"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        {errors.slug && <p className="text-red-600 text-sm mb-3">Enter a slug.</p>}

        <div className="mt-3">
          <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-1"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {errors.image && <p className="text-red-600 text-sm mb-3">Choose a featured image.</p>}

        {post && (
          <div className="w-full mb-4">
            <FramedImage
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="mt-3">
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          disabled={saving}
        >
          {saving ? "Saving..." : post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}