import React from 'react'
import {  Button,Menu } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Menu.Item>
            <button primary>Giriş Yap</button>
            <button primary style={{marginleft=0.5em}}>Kayıt Yap</button>
            </Menu.Item>
        </div>
    )
}
