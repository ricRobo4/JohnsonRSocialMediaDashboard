import { Container, Row, Col } from 'react-bootstrap';
import './headerStyle.css';
import '../DarkModeStyle/darkMode.css';
import { useState, useEffect } from 'react';

function Header({toggle}) 
{
    const [colorMode, setColorMode] = useState('light');
    const toggleDarkMode = () => {
        if(colorMode === 'light'){
            setColorMode('dark');
        }else{
            setColorMode('light');
        }
    }
    useEffect(() => {
        document.body.className = colorMode;
    }, [colorMode]);
    let totalFollowers = 0;
    return(
        <div className={colorMode ? 'light' : 'dark'}>
            <Container className='header'>
                <Row className='title-and-switch'>
                    <Col>
                        <h2>Social Media Dashboard</h2>
                    </Col>
                    <Col>
                        <Row className='toggle-row'>
                            <Col>
                                <p className='toggle-text'>Dark Mode</p>
                            </Col>
                            <Col>
                                <label className='dark-toggle'>
                                <input type='checkbox'onClick={toggle}/>
                                <span className='slider'></span>
                            </label>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Total Followers: {totalFollowers}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header