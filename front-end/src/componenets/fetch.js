import React, { useState } from 'react'




export function PullData() {
  const [data, setData] = useState("");
  fetch('http://localhost:3001/')
    .then(res => res.json)
    .then(response => setData({response}))
}