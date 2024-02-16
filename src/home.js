import React from 'react'

export default function Home() {
  return (
    <p style={{textAlign:'center'}}>
        <h3>ยินดีต้อนรับสู่ React store</h3>
    ราย <a href="/product">สินค้า</a> ที่เรามีจำหน่าย
    <br/>
    แต่ท่านต้องเป็น <a href="/mamber">สมาชิก</a> จึงจะสั่งซื้อได้
<br/>
    หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
    </p>
  )
}