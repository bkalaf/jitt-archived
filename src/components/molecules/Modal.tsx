export const i = 1;
// import { faWindowClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { DataToggleButton } from '../atoms/DataToggleButton';
// import { SizeProp } from '@fortawesome/fontawesome-svg-core';
// import { Children } from '../Children';
// import { OnClickFunction } from '../OnClickFunction';
// import { ModalContent } from './ModalContent';

// interface ModalProps<T extends { [key: string]: string }> {
//     name: string;
//     formData: T;
//     setFormData: React.Dispatch<React.SetStateAction<T>>;
//     formDataDefault: T;
//     feedback?: string;
//     resetFeedback: React.Dispatch<string | undefined>;
//     iconSize: SizeProp;
//     icon: IconDefinition;
//     shown: boolean;
//     toggle: () => void;
//     forClick: OnClickFunction;
//     theme: string;
//     title: string;
//     children?: Children;
//     rootId: string;
// }
// export function Modal<T extends { [key: string]: string }>(props: ModalProps<T>) {
//     const {
//         name,
//         shown,
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
//         ...spread
//     } = props;
//     const modalID = `${name}-modal`;
//     const formID = `${name}-form`;
//     const addTheme = (s?: string) => [s, theme].join(' ').trim();
//     const toggler = () => {
//         setFormData(formDataDefault);
//         toggle();
//     };
//     return ReactDOM.createPortal(
//         shown ? (
//             <div id={modalID} className="modal">
//                 <DataToggleButton
//                     className={addTheme(
//                         'absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close'
//                     )}
//                     toggle={toggler}>
//                     <FontAwesomeIcon icon={faWindowClose} />
//                 </DataToggleButton>
//                 {ModalContent<T>({
//                     title,
//                     theme,
//                     iconSize,
//                     icon,
//                     formID,
//                     feedback,
//                     formData,
//                     setFormData,
//                     forClick,
//                     resetFeedback,
//                     formDataDefault,
//                     toggle,
//                 })}
//             </div>
//         ) : null,
//         document.getElementById(rootId)!
//     );
// }

