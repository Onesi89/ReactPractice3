import React from "react";
import { instance } from "../ajaxRequest/ajaxRequest";
import { LoginType, SocialLoginType } from "../login";
import { update } from "../../app/loginSlice";

const Movemain = async (data: LoginType, navigate: any, dispatch: any) => {
    // let navigate = useNavigate();
    // const dispatch = useDispatch();

    let res = await instance.post("http://3.38.19.221:8081/api/login/member", { ...data });
    let memberInfo: any = {
        ...res.data,
        autorization: res.headers.authorization,
        refreshtoekn: res.headers.refreshtoken,
    };

    dispatch(update(memberInfo));
    navigate("/main/member");

    return { ...memberInfo };
};

export default Movemain;

const MoveMainGoogle = async (data: SocialLoginType, navigate: any, dispatch: any) => {
    //구글 api 필요
    let res = await instance.post("http://3.38.19.221:8081/api/login/member", { ...data });
    let memberInfo: any = {
        ...res.data,
        autorization: res.headers.authorization,
        refreshtoekn: res.headers.refreshtoken,
    };

    dispatch(update(memberInfo));
    navigate("/main/member");

    return { ...memberInfo };
};

export { MoveMainGoogle };
