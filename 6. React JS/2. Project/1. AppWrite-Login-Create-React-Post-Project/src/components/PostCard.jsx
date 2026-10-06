import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import FramedImage from './FramedImage'

const toPlainText = (html) => {
  if (!html) return ""
  const doc = new DOMParser().parseFromString(html, "text/html")
  return (doc.body.textContent || "").trim()
}

function PostCard({ $id, title, content, featuredImage }) {
  const excerpt = toPlainText(content)

  return (
    <Link to={`/post/${$id}`} className='block h-full'>
      <div className='w-full h-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md duration-200'>
        <div className='w-full mb-4'>
          <FramedImage
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>

        <h2 className='text-xl font-bold text-center text-black'>{title}</h2>
        <p className='mt-1 text-center text-xs text-gray-500 break-all'>/{$id}</p>
        {excerpt && (
          <p className='mt-2 text-sm text-center text-gray-700 line-clamp-3'>{excerpt}</p>
        )}
      </div>
    </Link>
  )
}

export default PostCard