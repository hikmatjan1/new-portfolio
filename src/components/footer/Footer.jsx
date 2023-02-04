import React from 'react';
import style from './footer.module.css';

function Footer() {
    return (
        <div className={style.footer}>
            <div className="container">
                <dir className={style.footer_wrapper}>
                    <span>Copyright © 2023 <strong style={{ color: "crimson" }}>Hikmat To'rayev.</strong> All Rights Reserved.</span>
                </dir>
            </div>
        </div>
    )
}

export default React.memo(Footer);