import React from 'react';
import styles from '../css/LeftNav.module.css';
import '../css/all.css';
import { useState, useRef } from 'react';

const LeftNav = ({ info }: any) => {
    const focusout = useRef<HTMLInputElement>(null);
    //나중에 useState에 객체 저장
    const Example = (e: React.ChangeEvent<HTMLSelectElement>) => {
        focusout.current?.focus();
    };
    const [ro, setRo] = useState(false);
    return (
        <>
            <div className={styles.div}>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <div>
                        {/*로그인 후 사용자 객체 가져온 뒤 출력 예정 */}
                        <img className={styles.profileImg} src="/img/no-img.jpg" alt="등록된 프로필 이미지 없음" />
                        <h5>{info.nickname}</h5>
                    </div>
                    <div
                        className={styles.innderDiv}
                        style={{ backgroundColor: 'rgb(55, 64, 77)' }}
                        onClick={() => {
                            setRo(!ro);
                        }}
                    >
                        <select className={styles.innerSelect} onChange={Example}>
                            <option value="1" id="abc">
                                수취인명
                            </option>
                            <option value="2">구매자명</option>
                            <option value="3">구매자연락처</option>
                            <option value="4">구매자ID</option>
                            <option value="5">주문번호</option>
                            <option value="6">상품주문번호</option>
                            <option value="7">상품번호</option>
                            <option value="8">운송장번호</option>
                        </select>
                        <span className={styles.innderDivArrow}>
                            <img src="/img/arrow.jpg" alt="" className={styles.innderDivArrowImg} />
                        </span>
                        <div className={styles.innderDiv}>
                            <input type="text" ref={focusout} />
                            <img
                                className={styles.innerDivMagnifying}
                                src="/img/magnifying-glass.png"
                                alt="돋보기"
                                width={'100%'}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.innderDivComm}>
                    <ul>
                        <li>상품관리</li>
                        <li>판매관리</li>
                        <li>정산관리</li>
                        <li>문의/리뷰관리</li>
                        <li>톡톡 상담관리</li>
                        <li>스토어 전시관리</li>
                        <li>노출관리</li>
                        <li>고객혜택관리</li>
                        <li>마케팅메세지</li>
                        <li>커머스솔루션</li>
                        <li>통계</li>
                        <li>판매자지원프로그램</li>
                        <li>판매자정보</li>
                        <li>지식재산권침해관리</li>
                        <li>물류관리</li>
                        <li>공지사항</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LeftNav;
