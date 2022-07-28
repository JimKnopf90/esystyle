import React from "react";
import "./modal.css";
// @ts-ignore
import closeIcon from '../assets/closeIcon.png';
import {Button} from "../index";

interface EfyModal {
}

export interface EfyModalProps {
    children?: any
}

const EfyModal = ({
    children,
    ...props
} : EfyModalProps) => {
    return (
        <>
            <div className={"efy-modal"}>
                <div className={"efy-modal-inner"}>
                    <div className={"efy-modal-header"}>
                        <div className={"efy-modal-title"}>

                        </div>
                        <button className={"efy-modal-btnClose"} type={"button"}>
                            <span><img className={"efy-modal-closeIcon"} src={closeIcon} /></span>
                        </button>
                    </div>
                    <div className={"efy-modal-content"}>
                        {children}
                    </div>
                    <div className={"efy-modal-bottom"}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EfyModal;

