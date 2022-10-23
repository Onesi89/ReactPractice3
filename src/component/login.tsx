import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { instance } from './ajaxRequest/ajaxRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { update } from '../app/loginSlice';
import elementSize from '../lib/windowSize';

const Login = () => {
    let [info, setInfo] = useState({ memberID: '', memberPW: '', check: 'false' });
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [ewid, ehei] = elementSize({ w: 400, h: 300 });

    const change = (prop: any) => {
        let changeInfo = {};

        if (prop.target.type === 'text') {
            changeInfo = { memberID: prop.target.value };
        } else {
            changeInfo = { memberPW: prop.target.value };
        }

        let prevInfo = { ...info, ...changeInfo };

        setInfo(prevInfo);
    };

    const Click = async (e:React.MouseEvent) => {
        try {
            e.preventDefault();
            let data = { ...info };
            let res = await instance.post('http://3.38.19.221:8081/api/login/member', { ...data });
            let memberInfo = {
                ...res.data,
                autorization: res.headers.authorization,
                refreshtoekn: res.headers.refreshtoken,
            };
            dispatch(update(memberInfo));
            navigate('/main/' + memberInfo.mnum);
        } catch (err) {
            console.log(err);
            alert('아이디 또는 암호를 확인해주세요.');
        }
    };

    return (
        <div
            style={{
                width: ewid,
                height: ehei,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            <div
                style={{
                    width: '400px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    border: '2px solid black',
                    borderRadius: '50px',
                }}
            >
                <form action="post">
                    <table style={{ marginTop: '-60px', marginBottom: '30px' }}>
                        <thead>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '25px',
                                        height: '100px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <h2>로그인</h2>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontSize: '25px', width: '50px' }}>
                                    <span>ID</span>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        style={{ fontSize: '20px' }}
                                        value={info?.memberID}
                                        onChange={change}
                                        placeholder="아이디를 입력해주세요"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: '25px' }}>
                                    <span>PW</span>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        style={{ fontSize: '20px' }}
                                        value={info?.memberPW}
                                        onChange={change}
                                        placeholder="암호를 입력해주세요"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            type="button"
                            style={{ fontSize: '18px', backgroundColor: 'blue', color: 'white', border: 'none' }}
                            onClick={(e) => Click(e)}
                        >
                            확인
                        </button>
                        <button
                            type="button"
                            style={{
                                fontSize: '18px',
                                backgroundColor: 'blue',
                                color: 'white',
                                marginLeft: '15px',
                                border: 'none',
                            }}
                        >
                            비밀번호찾기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    info: PropTypes.object,
    memberID: PropTypes.string,
    memberPW: PropTypes.string,
    check: PropTypes.string,
};

export default Login;
