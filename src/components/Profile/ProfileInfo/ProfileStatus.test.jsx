// import React from "react";
// import ProfileStatus from './ProfileStatus'
// import {create} from 'react-test-renderer'
// describe('ProfileStatus component', () => {
//     test('status from props should be in the state', () => {
//         const component=create(<ProfileStatus status="IT"/>)
//         const instance=component.root
//         expect(instance.state.status).toBe("IT")
//     }); 
    
//     test('after creation span should be displayed ', () => {
//         const component=create(<ProfileStatus status="IT"/>)
//         const instance=component.root
//         let span=instance.findByType('span')
//         expect(span.length).toBe(1)
//     });  
    
//     test('after creation span should contains correct status', () => {
//         const component=create(<ProfileStatus status="IT"/>)
//         const instance=component.root
//         let span=instance.findByType('span')
//         expect(span.innerText).toBe('IT')
//     });  
// })
