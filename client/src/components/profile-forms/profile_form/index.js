import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../../actions/profile';
import { SelectStyle, Form, TextAreaStyle } from './style';
import Input from '../../layout/input';
import ContainerForm from '../../layout/perfil_form';
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram
} from 'react-icons/ai';

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({ createProfile, history }) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <ContainerForm>
      <h1>Adcionar perfil</h1>
      <small>* Campos Obrigatórios</small>
      <Form onSubmit={(e) => onSubmit(e)}>
        <div>
          <SelectStyle name='status' value={status} onChange={onChange}>
            <option>* Selecione o cargo</option>
            <option value='Developer'>Desenvolvedor</option>
            <option value='Junior Developer'>Dev Junior</option>
            <option value='Senior Developer'>Dev Senior</option>
            <option value='Manager'>Gerente</option>
            <option value='Student or Learning'>Estudante</option>
            <option value='Instructor'>Professor</option>
            <option value='Intern'>EStagiário</option>
            <option value='Other'>Outro</option>
          </SelectStyle>
          <small>Cargo Atual</small>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Empresa'
            name='company'
            valueInput={company}
            onChangeInput={(e) => onChange(e)}
          />
          <small>Empresa qual trabalha</small>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Site'
            name='website'
            valueInput={website}
            onChangeInput={(e) => onChange(e)}
          />
          <small>Site da empresa</small>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Localização'
            name='location'
            valueInput={location}
            onChangeInput={(e) => onChange(e)}
          />
          <small>Cidade e estado ex.(Charqueadas, RS)</small>
        </div>
        <div>
          <Input
            type='text'
            placeholder='* Skills'
            name='skills'
            valueInput={skills}
            onChangeInput={(e) => onChange(e)}
          />
          <small>Por favor separar por virgulas ex.(HTML,CSS)</small>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Usuario GitHub'
            name='githubusername'
            valueInput={githubusername}
            onChangeInput={(e) => onChange(e)}
          />
          <small>Usuario no github</small>
        </div>
        <div>
          <TextAreaStyle
            placeholder='Biografia'
            name='bio'
            value={bio}
            onChange={onChange}
          />
          <small>Fale um pouco sobre você</small>
        </div>

        <div>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
          >
            Adicionar redes sociais
          </button>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div>
              <AiFillTwitterCircle size={30} color={'blue'} />
              <Input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                valueInput={twitter}
                onChangeInput={(e) => onChange(e)}
              />
            </div>

            <div>
              <AiFillFacebook size={30} color={'blue'} />
              <Input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                valueInput={facebook}
                onChangeInput={(e) => onChange(e)}
              />
            </div>

            <div>
              <AiFillYoutube size={30} color={'red'} />
              <Input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                valueInput={youtube}
                onChangeInput={(e) => onChange(e)}
              />
            </div>

            <div>
              <AiFillLinkedin size={30} color={'blue'} />
              <Input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                valueInput={linkedin}
                onChangeInput={(e) => onChange(e)}
              />
            </div>

            <div>
              <AiFillInstagram size={30} color={'blue'} />
              <Input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                valueInput={instagram}
                onChangeInput={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <button type='submit'> Enviar </button>
        <Link to='/dashboard'>Voltar</Link>
      </Form>
    </ContainerForm>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(ProfileForm)
);
