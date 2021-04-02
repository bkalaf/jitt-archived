import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { Children } from './Children';
import { OnClickFunction } from './OnClickFunction';

interface ModalProps<T extends { [key: string]: string }> {
    id: string;
    formID: string;
    formData: T;
    setFormData: React.Dispatch<React.SetStateAction<T>>;
    formDataDefault: T;
    feedback?: string;
    resetFeedback: React.Dispatch<string | undefined>;
    iconSize: SizeProp;
    icon: IconDefinition;
    shown: boolean;
    toggle: () => void;
    forClick: OnClickFunction;
    theme: string;
    title: string;
    children?: Children;
    rootId: string;
}
// export function Modal<T extends { [key: string]: string }>(props: ModalProps<T>) {
//     const {
//         shown,
//         formID,
//         resetFeedback,
//         forClick,
//         formDataDefault,
//         feedback,
//         title,
//         toggle,
//         iconSize,
//         icon,
//         rootId,
//         setFormData,
//         formData,
//         theme,
//         id,
//         ...spread
//     } = props;
//     const addTheme = (s?: string) => [s, theme].join(' ').trim();
//     return ReactDOM.createPortal(
//         shown ? (
//             <div
//                 id="login-modal"
//                 className="z-50 w-11/12 mx-auto bg-white rounded shadow-lg modal-container lg:max-w-lg overlow-y-auto">
//                 <DataToggleButton
//                     className={addTheme(
//                         'absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close'
//                     )}
//                     toggle={() => {
//                         setFormData(formDataDefault);
//                         toggle();
//                     }}>
//                     <FontAwesomeIcon icon={faWindowClose} />
//                 </DataToggleButton>
//                 <div className="grid items-center justify-center grid-cols-2 p-2 py-1 modal-content">
//                     <ModalHeader title={title} className={`${theme} py-1 shadow-lg col-span-2`}></ModalHeader>
//                     <ModalImage size={iconSize} icon={icon} className={`mx-2 my-1 p-2 flex w-full rounded-2xl  ${theme}`} />
//                     <div className="flex">                        
//                         <ModalForm
//                             id={formID}
//                             feedback={feedback}
//                             formData={formData}
//                             setFormData={setFormData}
//                             {...spread}></ModalForm>
//                         <ModalFooter
//                             onClick={forClick}
//                             resetFeedback={resetFeedback}
//                             defaultData={formDataDefault}
//                             setFormData={setFormData}
//                             toggle={toggle}
//                         />
//                     </div>
//                 </div>
//             </div>
//         ) : null,
//         document.getElementById(rootId)!
//     );
// }
