import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";

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
position: relative;
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
max-height: 250px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-image: ${({ image }) =>
    image
      ? `url(${image})`
      : `url('https://64.media.tumblr.com/6907f9ada3517cd8c0acbc1dc81686e0/tumblr_mve8jnOHXp1s335jfo1_r1_500.gif')`} !important;
overflow: hidden;
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
${'' /* margin-top: -35px !important; */}
width: 100% !important;
${'' /* margin-left: -130px !important; */}
position: relative;
text-align: center;
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
position: relative;
top: -20px;

`
const ErrorModalBg = styled.div`
position: fixed;
${'' /* top: calc(50% - 200px);
left: calc(50% - 200px); */}
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(14, 14, 14, 0.62);
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`

const ErrorModalContent = styled.div`
position: relative;
top: calc(50% - 200px);
left: calc(50% - 200px);
top: 0;
left: 0;
max-width: 400px;
max-height: 400px;
width: 100%;
height: 100%;
background-color: rgba(14, 14, 14, 0.62);
${'' /* display: flex;
justify-content: center;
align-items: center; */}
z-index: 9999;
`

const goals = [
  'Dominar o mundo',
  'Passar na matéria da Aline',
  'Ser especialista em miojo',
  'Explodir a Terra (por acidente, claro)',
  'Explorer',
  'Thug',
  'Mercenary',
  'Royalty',
  'Gladiator'
];
export const App = () => {
  const [errorModal, setErrorModal] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [worldType, setWorldType] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(undefined);
  const [handleWorldDropdown, setHandleWorldDropdown] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [previewProfilePicture, setPreviewProfilePicture] = useState("");
  const inputRefPreviewPicture = useRef(null);

  const handleClickUploadPicture = () => {
    inputRefPreviewPicture.current.click(); // dispara o click no input
  };
  // useEffect(() => {
  //   // Inicializa checkboxes e demais controles do RPGUI
  //   if (window.RPGUI) {
  //     window.RPGUI.initAll();
  //   }
  // }, []);

  const [attributes, setAttributes] = useState({
    strength: 5,
    agility: 5,
    intelligence: 5,
  });
  const handleChangeAttributes = (attr, value) => {
    const updated = { ...attributes, [attr]: Number(value) };
    setAttributes(updated);
    setValue("attributes", updated); // agora passa o valor correto
  };
  const onSubmit = (data) => {
    setCharacters([...characters, data]);
    console.log("Dados enviados:", data);
  };
  const onError = (errors) => {
    setErrorModal(true);
    console.log("Erros:", errors);
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    setValue("goal", goal); // registra no RHF
  };

  const closeModal = () => {
    setErrorModal(false);
  }

  // const [skills, setSkills] = useState({
  //   skill1: false,
  //   skill2: false,
  //   skill3: false,
  // });

  // const handleCheckboxChange = ({ name }) => {
  //   setSkills(prev => {
  //     const updated = { ...prev, [name]: !prev[name] };
  //     console.log(updated); // Aqui você vê o valor atualizado
  //     return updated;
  //   });
  // };

  const handleWorldClick = (value) => {
    setWorldType(value);
    setValue("worldType", value); // registra no RHF
  };

  return (
    <>
      <MainContainer className="rpgui-content rpgui-container framed">
        {errorModal && <ErrorModalBg onClick={closeModal}>
          <ErrorModalContent className='rpgui-container framed-golden-2'>
            <h1 style={{ fontSize: '20px' }}>Erro</h1>
            <hr />
            <p>
              {errors.name && errors.name.message}
              {errors.description && errors.description.message}
              {errors.attributes && errors.attributes.message}
              {errors.worldType && errors.worldType.message}
              {errors.goal && errors.goal.message}
            </p>
          </ErrorModalContent>
        </ErrorModalBg>}
        <h1 className='my-4' style={{ fontSize: '30px' }}>CRIE SEU PERSONAGEM LENDÁRIO</h1>
        <hr className='golden' />
        <p style={{ fontSize: '16px' }} className='p-4'>Uma batalha está prestes a se iniciar em um local não divulgado (Senac), precisamos de toda a ajuda possível...
          <br /><br />
          Crie seu personagem para lutar em uma competição que entrará para história.</p>
        <hr style={{ gridColumn: 'span 2' }} />
        <RPGForm id="rpg-form" onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <div className='mt-2'>
              <label>Nome</label>
              <input placeholder='Digite o nome de seu personagem' type="text" {...register("name", { required: "O nome é obrigatório", minLength: 3, maxLength: 30 })} />
              {/* {errors.name && alert('erro')} */}
            </div>
            <div className='mt-4'>
              <label>Descrição</label>
              <RPGTextArea placeholder="Digite a descrição do seu personagem" {...register("description", { required: "a descrição é obrigatória" })}>

              </RPGTextArea>
            </div>
          </div>
          {/* TODO: Implementar upload de foto */}
          <UploadProfilePicture
            onClick={handleClickUploadPicture}
            image={previewProfilePicture}
            className='rpgui-container framed p-relative'
          >
            {/* <img src={previewProfilePicture} alt="" style={{ maxWidth: '100%', height: '100%', position: 'relative', objectFit: 'cover' }} /> */}
            {/* <label>teste</label>
          <input type="text" /> */}
            <input
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              ref={inputRefPreviewPicture}
              id='InputProfilePicture'
              type="file"
              accept="image/*"
              {...register("profilePicture")}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreviewProfilePicture(URL.createObjectURL(file)); // cria URL temporária
                  console.log(URL.createObjectURL(file))
                }
              }}
            />
          </UploadProfilePicture>
          <hr style={{ gridColumn: 'span 2' }} />
          <LabelTitleForm style={{ gridColumn: 'span 2' }}>Habilidades</LabelTitleForm>
          <Habilidades className='mt-2' style={{ gridColumn: 'span 2' }}>
            <div>

              <input
                id="skill1"
                className="rpgui-checkbox golden"
                type="checkbox"
                // checked={skills.skill1}
                data-rpguitype="checkbox"
                // onChange={(e) => {
                //   setSkills(prev => ({ ...prev, skill1: e.target.checked }));
                //   setValue("skill1", e.target.checked); // setValue do RHF
                // }}
                {...register("skill1")}
              />
              <label htmlFor="skill1">Soco do Desentupidor</label>
            </div>
            <div>

              <input id="skill2" className="rpgui-checkbox golden" type="checkbox" data-rpguitype="checkbox" {...register("skill2")} />
              <label htmlFor='skill2'>Abraço Fatal</label>
            </div>
            <div>

              <input id="skill3" className="rpgui-checkbox golden" type="checkbox" data-rpguitype="checkbox" {...register("skill3")} />
              <label htmlFor='skill3'>Rugido do Gato</label>
            </div>
          </Habilidades>
          <hr style={{ gridColumn: 'span 2' }} />
          <div className=''>
            <div className='mt-3'>
              <label>Origem</label>
              <input type="text" placeholder='Digite a origem' {...register("origin", { required: "A origem é obrigatório", minLength: 3, maxLength: 50 })} />
            </div>
            <div className='mt-3'>
              <label>Universo</label>
              <input type="text" placeholder='Digite o universo' {...register("universe", { required: "O universo é obrigatório", minLength: 3, maxLength: 50 })} />
            </div>
            <div className='mt-3' style={{ position: 'relative' }}>
              <label htmlFor="">Tipo de mundo</label>
              <p className="rpgui-dropdown-imp rpgui-dropdown-imp-header" onClick={() => setHandleWorldDropdown(!handleWorldDropdown)}>
                <label>▼</label> {worldType || "Selecione"}
              </p>
              {handleWorldDropdown &&
                <ul className="rpgui-dropdown-imp" style={{ position: 'absolute', top: '60px', left: '0', height: 'fit-content', width: '100%' }} onMouseLeave={() => setHandleWorldDropdown(false)}>
                  <li onClick={() => handleWorldClick("fantasy")} style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '6px', paddingTop: '6px' }}>Fantasia</li>
                  <li onClick={() => handleWorldClick("sci-fi")} style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '6px', paddingTop: '6px' }}>Ficção científica</li>
                  <li onClick={() => handleWorldClick("modern")} style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '6px', paddingTop: '6px' }}>Moderno</li>
                  <li onClick={() => handleWorldClick("historical")} style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '6px', paddingTop: '6px' }}>Histórico</li>
                  <li onClick={() => handleWorldClick("steampunk")} style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '6px', paddingTop: '6px' }}>Steampunk</li>
                </ul>
              }
            </div>
          </div>
          <div>
            <h1>Objetivo</h1>
            <ul id="background-select-rpgui-list" className="rpgui-list-imp" style={{ height: '150px' }}>
              {goals.map((goal) => (
                <li
                  style={{ height: 'fit-content', marginBottom: '5px', borderBottom: '1px solid #281e0663', paddingBottom: '15px', paddingTop: '15px' }}
                  key={goal}
                  data-rpguivalue={goal}
                  className={selectedGoal === goal ? 'text-yellow' : '' + `active`}
                  onClick={() => handleSelectGoal(goal)}
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <hr className='golden' style={{ gridColumn: 'span 2' }} />
          {/* 
        Não deu tempo de implementar :/ 
        */}
          {/* <div>
          <div>
            <h1>Força</h1>
            <div>
              <input
                className="rpgui-slider golden"
                type="range"
                min="0"
                max="10"
                value={attributes.strength}
                onChange={(e) => handleChangeAttributes("strength", e.target.value)}
              />
            </div>
          </div>
          <div>
            <h1>Agilidade</h1>
            <div>
              <input
                className="rpgui-slider golden"
                type="range"
                min="0"
                max="10"
                value={attributes.agility}
                onChange={(e) => handleChangeAttributes("agility", e.target.value)}
              />
            </div>
          </div>
          <div>
            <h1>Inteligência</h1>
            <div>
              <input
                className="rpgui-slider golden"
                type="range"
                min="0"
                max="10"
                value={attributes.intelligence}
                onChange={(e) => handleChangeAttributes("intelligence", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Vida</h1>
            <div className="rpgui-progress"></div>
          </div>
          <div>
            <h1>Percepção</h1>
            <div className="rpgui-progress red"></div>
          </div>
          <div>
            <h1>Carisma</h1>
            <div className="rpgui-progress blue"></div>
          </div>
        </div>
        <hr className='golden' style={{ gridColumn: 'span 2' }} /> */}
        </RPGForm>
        <FooterContainer>
          <button form="rpg-form" className='rpgui-button' type="submit"><p>Registrar</p></button>
        </FooterContainer>
        <Morcego></Morcego>
      </MainContainer>
      {characters.length > 0 && <MainContainer className="rpgui-content rpgui-container framed" style={{ marginTop: '20px' }}>
        <h1>Personagens</h1>
        {/* {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onCharacterClick={handleCharacterClick}
                onCharacterDelete={handleCharacterDelete}
                onCharacterEdit={handleCharacterEdit}
              />} )
            )}   */}
        {characters.length > 0 && characters.map((character) => {
          return (
            <div style={{ border: '1px solid #281e0663', padding: '10px' }}>
              <p>
                Nome: {character.name}
              </p>
              <p>Descrição: {character.description}</p>
              <p>
                Origem: {character.origin}
              </p>
              <p>
                Tipo de mundo: {character.worldType}
              </p>
              <p>
                Universo: {character.universe}
              </p>
              <p>Objetivo: {character.goal}</p>
              {character.skill1 || character.skill2 || character.skill3 && <div><h1>Habilidades</h1>
                {character.skill1 && <p>Soco do Desentupidor</p>}
                {character.skill2 && <p>Abraço Fatal</p>}
                {character.skill3 && <p>Rugido do Gato</p>}
              </div>}

            </div>
          )
        })}

      </MainContainer> }
      
    </>
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
