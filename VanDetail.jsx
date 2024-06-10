import React from "react"
import { useParams } from "react-router-dom"
const params = useParams()
console.log(params)
export default function VanDetail() {
    return <h1>Van detail page goes here</h1>
}