import React, {useState, useEffect,} from 'react';
import {WorkAdd} from './../components/add';
import {Add} from './../../../../api/data/works.data';

//contenedor que va a tener las funciones de de agregar trabajos
export const WorkAddContainer = () => {
    //estados para manipular los datos
    const [openWorkPost, setOpenWorkPost] = useState(false);
    const handleOpenWorkPost = () => setOpenWorkPost(true);
    const handleCloseWorkPost = () => setOpenWorkPost(false);

    const [name, setName] = useState('');
    const handleChangeName = e => setName(e.target.value);

    const [caption, setCaption] = useState('');
    const handleChangeCaption = e => setCaption(e.target.value);

    const [price, setPrice] = useState('0.0');
    const handleChangePrice = e => setPrice(e.target.value);

    const [state, setState] = useState('');
    const [error, setError] = useState('error');

    //funcion para guardar un trabajo, añadimos name, caption y price a la  funcion Add
    const handleClickWorkPost = () => {
        setState('loading');
        Add({
            name,
            caption,
            price
        }).then(() => {
            setState('success');
            setName('');
            setCaption('');
            setPrice('');
            setOpenWorkPost(false);
            
            console.log('guardado!!!!!!');
        }).catch(error => {
            setError(error);
            setState('error');
            console.log(error);
        });
    };

    return (
        //pasamos las funciones al componente
        <WorkAdd
            openWorkPost={openWorkPost}
            onOpenWorkPost={handleOpenWorkPost}
            onCloseWorkPost={handleCloseWorkPost}

            name={name}
            onChangeName={handleChangeName}

            caption={caption}
            onChangeCaption={handleChangeCaption}

            price={price}
            onChangePrice={handleChangePrice}

            onClickWorkPost={handleClickWorkPost}

            state={state}
            error={error}

        />
    );
};