import React, { useState } from 'react'
import styled from 'styled-components';


const MainContainer = styled.div`
max-width: 960px;
position: relative;
width: 100%;
min-height: 100%;
padding: 20px;
box-sizing: border-box;
z-index: 2;
`

const RPGForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(auto);
grid-gap: 25px;
box-sizing: border-box;
padding: 20px;
`

const RGPButtonSubmit = styled.button`
`

const UploadProfilePicture = styled.div`
min-height: 250px;
height: 100%;
background-image: url('https://64.media.tumblr.com/6907f9ada3517cd8c0acbc1dc81686e0/tumblr_mve8jnOHXp1s335jfo1_r1_500.gif') !important;
background-size: cover !important;
`

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`

const RPGTextArea = styled.textarea`
min-height: 40px !important;
`

const LabelTitleForm = styled.h2`
margin-top: -35px !important;
margin-left: -130px !important;
position: relative;
`

const Morcego = styled.div`
background-image: url('https://i.imgur.com/bUEzji8.gif');
position: absolute;
background-size: cover;
background-position: center;
width: 100%;
height: 500px;
left: 0;
top: 0;
z-index: -1;
opacity: 0.2;
`

const Habilidades = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`
const backgrounds = [
  'Blacksmith',
  'Merchant',
  'City Guard',
  'Alchemist',
  'Explorer',
  'Thug',
  'Mercenary',
  'Royalty',
  'Gladiator'
];
export const App = () => {
  const [selectedBackground, setSelectedBackground] = useState('Blacksmith');

  const handleSelect = (background) => {
    setSelectedBackground(background);
  };



  return (
    <MainContainer className="rpgui-content rpgui-container framed">
      <h1 className='my-4' style={{fontSize: '30px'}}>CRIE SEU PERSONAGEM LENDÁRIO</h1>
      <hr className='golden' />
      <p style={{fontSize: '16px'}} className='p-4'>Uma batalha está prestes a se iniciar em um local não divulgado (Senac), precisamos de toda a ajuda possível...
        <br /><br />
        Crie seu personagem para lutar em uma competição que entrará para história.</p>
        <hr style={{ gridColumn: 'span 2' }}/>
      <RPGForm>
        <div>
          <div className='mt-2'>
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className='mt-4'>
            <label>Descrição</label>
            <RPGTextArea>

            </RPGTextArea>
          </div>
        </div>
        <UploadProfilePicture className='rpgui-container framed p-relative'>
          {/* <label>teste</label>
          <input type="text" /> */}
        </UploadProfilePicture>
        <hr style={{ gridColumn: 'span 2' }} />
        <LabelTitleForm >Habilidades</LabelTitleForm>
        <div></div>
        <Habilidades className='mt-2' style={{ gridColumn: 'span 2' }}>
          <input className="rpgui-checkbox golden" type="checkbox" data-rpguitype="checkbox" />
          <label>Lorem 1</label>
          <input className="rpgui-checkbox golden" type="checkbox" data-rpguitype="checkbox" />
          <label>Lorem 2</label>
          <input className="rpgui-checkbox golden" type="checkbox" data-rpguitype="checkbox" />
          <label>Lorem 3</label>
        </Habilidades>
        <hr style={{ gridColumn: 'span 2' }} />
        <div className=''>
          <div className='mt-3'>
            <label>Origem</label>
            <input type="text" />
          </div>
          <div className='mt-3'>
            <label>Universo</label>
            <input type="text" />
          </div>
          <div className='mt-3'>

            <select className="rpgui-dropdown">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option2">option2</option>
              <option value="option2">option2</option>
            </select>
          </div>
        </div>
        <div>
          <h1>Objetivo</h1>
          <ul id="background-select-rpgui-list" className="rpgui-list-imp" style={{ height: '150px' }}>
            {backgrounds.map((background) => (
              <li
                style={{ padding: "23px !important" }}
                key={background}
                data-rpguivalue={background}
                className={selectedBackground === background ? 'rpgui-selected' : ''}
                onClick={() => handleSelect(background)}
              >
                {background}
              </li>
            ))}
          </ul>
        </div>
        <hr className='golden' style={{ gridColumn: 'span 2' }} />
        <div>
          <div>
            <h1>Força</h1>
            <div>
              <input className="rpgui-slider golden" type="range" min="0" max="10" value="5"></input>
            </div>
          </div>
          <div>
            <h1>Força</h1>
            <div>
              <input className="rpgui-slider golden" type="range" min="0" max="10" value="5"></input>
            </div>
          </div>
          <div>
            <h1>Força</h1>
            <div>
              <input className="rpgui-slider golden" type="range" min="0" max="10" value="5"></input>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Força</h1>
            <div className="rpgui-progress"></div>
          </div>
          <div>
            <h1>Força</h1>
            <div className="rpgui-progress red"></div>
          </div>
          <div>
            <h1>Força</h1>
            <div className="rpgui-progress blue"></div>
          </div>
        </div>
        <hr className='golden' style={{ gridColumn: 'span 2' }} />
      </RPGForm>
      <FooterContainer>
        <button className='rpgui-button' type="submit"><p>Registrar</p></button>
      </FooterContainer>
    <Morcego></Morcego>
    </MainContainer>

  )
}

export default App;















// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import styled from 'styled-components';

// // Estilos
// const MainContainer = styled.div`
//   max-width: 960px;
//   position: relative;
//   width: 100%;
//   min-height: 100%;
//   padding: 20px;
//   box-sizing: border-box;
// `;

// const RPGForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: repeat(auto);
//   grid-gap: 25px;
//   box-sizing: border-box;
//   padding: 20px;
// `;

// const UploadProfilePicture = styled.div`
//   min-height: 250px;
//   height: 100%;
//   background-image:url('https://64.media.tumblr.com/6907f9ada3517cd8c0acbc1dc81686e0/tumblr_mve8jnOHXp1s335jfo1_r1_500.gif');
//   background-size: cover !important;
//   cursor: pointer;
//   border: 4px solid #ccc; /* Borda visível */
//   border-radius: 8px; /* Borda arredondada */
//   position: relative;
// `;

// const FooterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 30px;
//   width: 100%;
// `;

// const RPGTextArea = styled.textarea`
//   min-height: 40px !important;
// `;

// const LabelTitleForm = styled.h2`
//   margin-top: -35px !important;
//   margin-left: -130px !important;
//   position: relative;
// `;

// const Habilidades = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   flex-direction: column;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-direction: column;
// `;

// const schema = yup.object().shape({
//   name: yup.string().required('Nome é obrigatório'),
//   description: yup.string().required('Descrição é obrigatória'),
//   origin: yup.string().required('Origem é obrigatória'),
//   universe: yup.string().required('Universo é obrigatório'),
//   skills: yup.array().min(1, 'Pelo menos uma habilidade deve ser preenchida'),
// });

// const backgrounds = [
//   'Destruição Total',
//   'Paz Mundial',
//   'Qualquer outra coisa',
// ];

// export const App = () => {
//   const [selectedBackground, setSelectedBackground] = useState('Destruição Total');
//   const [profileImage, setProfileImage] = useState('');

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       skills: [], // Array de habilidades
//     },
//   });

//   const handleSelectBackground = (background) => {
//     setSelectedBackground(background);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     // Aqui você pode enviar os dados para o backend ou realizar outra ação
//   };

//   return (
//     <MainContainer className="rpgui-content rpgui-container framed">
//       <h2>CRIE SEU PERSONAGEM LENDARIO</h2>
//       <hr />
//       <p>
//         Uma batalha está prestes a se iniciar em um local não divulgado (Senac), precisamos de toda a ajuda
//         possível...
//         <br />
//         <br />
//         Crie seu personagem para lutar em uma competição que entrará para história.
//       </p>
//       <RPGForm onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <div className="mt-2">
//             <label>Nome</label>
//             <Controller
//               name="name"
//               control={control}
//               render={({ field }) => <input {...field} type="text" className="rpgui-input" />}
//             />
//             {errors.name && <p>{errors.name.message}</p>}
//           </div>
//           <div className="mt-4">
//             <label>Descrição</label>
//             <Controller
//               name="description"
//               control={control}
//               render={({ field }) => <RPGTextArea {...field} className="rpgui-textarea" />}
//             />
//             {errors.description && <p>{errors.description.message}</p>}
//           </div>
//         </div>

//         <UploadProfilePicture className='rpgui-container framed' onClick={() => document.getElementById('file-input').click()} image={profileImage}>
//           <h1>Sua fotinho aqui</h1>
//           <input
//             id="file-input"
//             type="file"
//             accept="image/*"
//             style={{ display: 'none' }}
//             onChange={handleImageUpload}
//           />
//         </UploadProfilePicture>

//         <hr style={{ gridColumn: 'span 2' }} />

//         <LabelTitleForm>Habilidades</LabelTitleForm>
//         <div></div>
//         <Habilidades className="mt-2">
//           <Controller
//             name="skills"
//             control={control}
//             render={({ field }) => (
//               <InputContainer>
//                 {['Habilidade 1', 'Habilidade 2', 'Habilidade 3'].map((skill, index) => (
//                   <div key={index}>
//                     <label>{skill}</label>
//                     <input
//                       {...field}
//                       type="text"
//                       value={field.value[index] || ''}
//                       onChange={(e) => {
//                         const updatedSkills = [...field.value];
//                         updatedSkills[index] = e.target.value;
//                         setValue('skills', updatedSkills);
//                       }}
//                       className="rpgui-input"
//                     />
//                   </div>
//                 ))}
//               </InputContainer>
//             )}
//           />
//           {errors.skills && <p>{errors.skills.message}</p>}
//         </Habilidades>

//         <hr style={{ gridColumn: 'span 2' }} />

//         <div className="mt-2">
//           <div className="mt-3">
//             <label>Origem</label>
//             <Controller
//               name="origin"
//               control={control}
//               render={({ field }) => <input {...field} className="rpgui-input" />}
//             />
//             {errors.origin && <p>{errors.origin.message}</p>}
//           </div>
//           <div className="mt-3">
//             <label>Universo</label>
//             <Controller
//               name="universe"
//               control={control}
//               render={({ field }) => <input {...field} className="rpgui-input" />}
//             />
//             {errors.universe && <p>{errors.universe.message}</p>}
//           </div>
//         </div>

//         <div>
//           <h1>Objetivo</h1>
//           <ul id="background-select-rpgui-list" className="rpgui-list-imp" style={{ height: '150px' }}>
//             {backgrounds.map((background) => (
//               <li
//                 style={{ padding: '23px !important' }}
//                 key={background}
//                 data-rpguivalue={background}
//                 className={selectedBackground === background ? 'rpgui-selected' : ''}
//                 onClick={() => handleSelectBackground(background)}
//               >
//                 {background}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <FooterContainer style={{ gridColumn: 'span 2' }}>
//           <button className="rpgui-button" type="submit">
//             <p>Registrar</p>
//           </button>
//         </FooterContainer>
//       </RPGForm>
//     </MainContainer>
//   );
// };

// export default App;
