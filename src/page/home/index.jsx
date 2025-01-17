import React from 'react'
import { Header } from '../../component/header'
import { Siderbar } from '../../component/siderbar'
import { Content } from '../../component/content'
import './index.css'
export function Home() {
    return (
        <div>

            <nav class="navbar w-100 position-fixed border-bottom" style={{ backgroundColor: '#323232' }}>
                <div class="w-100">
                    <Header />
                </div>
            </nav>
            <div className="d-flex justify-content-between" style={{ paddingTop: '107px' }}>
                <div className="position-fixed col-md-3 div-siderbar border-end">
                    <Siderbar />
                </div>
                <div className="col-md-3 div-siderbar-bonus"></div>
                <div className=" col-md-9 div-content-main"><Content /></div>
            </div>
        </div>
    )
}
