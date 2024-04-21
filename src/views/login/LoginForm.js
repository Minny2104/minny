import { CButton, CCard, CCardBody, CCol, CImg, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CLabel, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import $ from "jquery";
import SuccessError from '../common/SuccessError';

const LoginForm = (props) => {

  useEffect(() => {
    $(window).resize(function(){
        setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
}, []);

  const [zoomSize, setZoomSize] = useState(
    Math.round(window.devicePixelRatio * 100)
    ); // browser zoom level
    let {loginClick,keyDownHandle,passwordChange,password,userCodeChange,userCode,success,error} = props;

    return (
  <>
      {zoomSize < 150 && (           
    <div
      className="min-vh-100  flex-row align-items-center login-bg"
    >
    <CRow>
  <CCol lg="3"></CCol>
<CCol lg="6">
<CCard className="login" style={{marginTop:"100px"}}
               >
                <CCardBody>
               
                  <CRow alignHorizontal='center'>
                  <CImg src='./image/b.png' width={130} height={130}></CImg>
                  </CRow>
                  <CRow alignHorizontal='center' className="mb-3">
                    <h3 className='login-title'>Registration System</h3>
                  </CRow>
                  <SuccessError success={success} error={error} />
                  <CRow className="mt-4 align-items-center">
                    <CCol lg="4"><CLabel className="form-label">User Code</CLabel></CCol>
                    <CCol lg="8">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CImg src='./image/user.png' width={20} height={20}></CImg>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" placeholder='Enter User Code' type='text' 
                        autoFocus value={userCode} onChange={userCodeChange} onKeyDown={keyDownHandle}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
              <br></br>
              <br></br>
                  <CRow className="align-items-center">
                    <CCol lg="4"><CLabel className="form-label">Password</CLabel></CCol>
                    <CCol lg="8">
                    <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CImg src='./image/password.png' width={20} height={20}></CImg>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput className="login-input" placeholder='Enter Password' type='password'
                         value={password} onChange={passwordChange} onKeyDown={keyDownHandle}
                         />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <br></br>
                  <br></br>
                  <CRow alignHorizontal='center' className="mb-4">
                    <CButton id="login" className='form-btn login-btn' 
                     onClick={loginClick}
                    >Login</CButton>
                  </CRow>
              
            
                </CCardBody>
              </CCard>

</CCol>

  <CCol lg="3"></CCol>
    </CRow>
    </div>
            
  )}

  {zoomSize > 140 &&(
    <div className = "login-bg">
    <CRow>
    <CCol lg="3"></CCol>
  <CCol lg="6">
  <CCard className="login" style={{marginTop:"50px"}}
                 >
                  <CCardBody>
                 
                    <CRow alignHorizontal='center'>
                    <CImg src='./image/butt.png' width={130} height={130}></CImg>
                    </CRow>
                    <CRow alignHorizontal='center' className="mb-3">
                      <h3 className='login-title'>Registration System</h3>
                    </CRow>
                    <SuccessError success={success} error={error} />
                    <CRow className="mt-4 align-items-center">
                      <CCol lg="3"><CLabel className="form-label">User Code</CLabel></CCol>
                      <CCol lg="6">
                        <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CImg src='./image/user.png' width={20} height={20}></CImg>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='Enter User Code' type='text' 
                          autoFocus value={userCode} onChange={userCodeChange} onKeyDown={keyDownHandle}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                <br></br>
                <br></br>
                    <CRow className="align-items-center">
                      <CCol lg="4"><CLabel className="form-label">Password</CLabel></CCol>
                      <CCol lg="8">
                      <CInputGroup>
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CImg src='./image/password.png' width={20} height={20}></CImg>
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput className="login-input" placeholder='Enter Password' type='password'
                           value={password} onChange={passwordChange} onKeyDown={keyDownHandle}
                           />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <br></br>
                    <br></br>
                    <CRow alignHorizontal='center' className="mb-4">
                      <CButton id="login" className='form-btn login-btn' 
                       onClick={loginClick}
                      >Login</CButton>
                    </CRow>
                
              
                  </CCardBody>
                </CCard>
  
  </CCol>
  
    <CCol lg="3"></CCol>
      </CRow>
      </div>
)}
</>
    )
}


export default LoginForm
