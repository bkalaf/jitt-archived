// import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
// import React from 'react';
// import { ModalHeader } from '../atoms/ModalHeader';
// import { ModalImage } from '../atoms/ModalImage';
// import { ModalFooter } from '../atoms/ModalFooter';
// import { ModalForm } from '../atoms/ModalForm';
// import { SizeProp } from '@fortawesome/fontawesome-svg-core';
// import { Children } from '../Children';
// import { OnClickFunction } from '../OnClickFunction';

// export function ModalContent<T extends { [key: string]: string }>({
//     title,
//     theme,
//     iconSize,
//     icon,
//     formID,
//     feedback,
//     formData,
//     setFormData,
//     forClick,
//     resetFeedback,
//     formDataDefault,
//     toggle,
//     ...spread
// }: {
//     title: string;
//     theme: string;
//     iconSize: SizeProp;
//     icon: IconDefinition;
//     formID: string;
//     feedback: string | undefined;
//     formData: T;
//     setFormData: React.Dispatch<React.SetStateAction<T>>;
//     forClick: OnClickFunction;
//     resetFeedback: React.Dispatch<string | undefined>;
//     formDataDefault: T;
//     toggle: () => void;
// }) {
//     return (
//         <div className="flex items-center justify-center p-2 py-1 modal-content">
//             <ModalHeader
//                 title={title}
//                 className={`${theme} py-1 shadow-lg col-span-2`}></ModalHeader>
//             <ModalImage
//                 size={iconSize}
//                 icon={icon}
//                 className={`mx-2 my-1 p-2 flex w-full rounded-2xl  ${theme}`}
//             />
//             <div className="flex">
//                 <ModalForm
//                     id={formID}
//                     feedback={feedback}
//                     formData={formData}
//                     setFormData={setFormData}
//                     {...spread}></ModalForm>
//                 <ModalFooter
//                     onClick={forClick}
//                     resetFeedback={resetFeedback}
//                     defaultData={formDataDefault}
//                     setFormData={setFormData}
//                     toggle={toggle}
//                 />
//             </div>
//         </div>
//     );
// }
export const i = 1;