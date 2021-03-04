import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';
import Modal from './components/modalLogin/modal';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
`

function App() {
    const [user, setUser] = useState({
        login: '',
        password: '',
        saved: false,
    })
    const [login, setLogin] = useState(null)
    const [authorized, setAuthorized] = useState(false)
    const [changeLogin, setChangeLogin] = useState(null)
    const [error, setError] = useState('')

    const onValidation = (user) => {
        let isValid = true
        isValid = user.login.trim() !== '' && isValid
        isValid = user.password.length >= 4 && isValid
        return isValid
    }

    const onLogin = (e) => {
        const changeUser = {...user}
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        changeUser[e.target.name] = value
        setUser(changeUser)
    }

    const onEnter = (e) => {
        e.preventDefault()
        const validation = onValidation(user)
        if (validation) {
            setAuthorized(true)
            setLogin(null)
            setError('')
            if (user.saved) {
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('authorized', JSON.stringify(true))
            }
        } else {
            setError('Введите корректный логин или пароль')
        }
    }

    const onClearUser = () => {
        const clearUser = {...user}
        Object.keys(clearUser).forEach( name => clearUser[name] = name === 'saved' ? false : "")
        setUser(clearUser)
    }

    const closeChangeLogin = () => {
        const validation = onValidation(user)
        if (validation) {
            setChangeLogin(null)
            setError('')
            if (user.saved) {
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('authorized', JSON.stringify(true))
            }
        } else {
            setError('Введите логин')
        }
    }

    const onExit = () => {
        setAuthorized(false)
        if (user.saved) {
            localStorage.removeItem('user')
            localStorage.removeItem('authorized')
        }
        onClearUser()
    }

    useEffect(() => {
        const authorizedLocal = localStorage.getItem('authorized');
        if (authorizedLocal) {
            const userLocal = localStorage.getItem('user');
            const user = JSON.parse(userLocal)
            const authorized = JSON.parse(authorizedLocal)
            setUser(user)
            setAuthorized(authorized)
        }
    }, [])

   return (
        <Container>
            <Header
                user={user}
                error={error}
                authorized={authorized}
                setLogin={setLogin}
                changeLogin={changeLogin}
                setChangeLogin={setChangeLogin}
                onExit={onExit}
                onLogin={onLogin}
                closeChangeLogin={closeChangeLogin}
            />
            <Switch>
                <Route path='/'
                     render={() => <Main/>
                     }
                />
                <Redirect to='/'/>
            </Switch>
            <Footer/>
            {login ?
                <Modal
                    user={user}
                    setUser={setUser}
                    setLogin={setLogin}
                    error={error}
                    onLogin={onLogin}
                    onEnter={onEnter}
                /> :
                null
            }
        </Container>
  );
}

export default App;
