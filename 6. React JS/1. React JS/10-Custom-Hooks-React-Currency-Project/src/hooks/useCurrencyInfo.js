import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => {
            if (!res.ok) throw new Error("primary failed")
            return res.json()
        })
        .then((res) => setData(res[currency]))
        .catch(() => {
            // fallback to Cloudflare Pages mirror if jsDelivr fails
            fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Both sources failed:", err))
        })
    }, [currency])

    return data
}

export default useCurrencyInfo;