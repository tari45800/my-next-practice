import { nameRegex } from "./regex";
import { phoneNumber } from "./regex";
// import { passwordRegex } from "./abc";

export const selfStudyForm = [
  "SelfStudy",
  {
    info: {
      label: "신청자 이름",
      name: "nickName",
      type: "text",
      placeholder: "이름을 입력해 주세요",
    },
    data: {
      required: "이름은 필수 항목입니다.",
      pattern: {
        message: "한글 이름을 입력해 주세요",
        value: `${nameRegex}`,
      },
    },
  },
  {
    info: {
      label: "신청자 생년월일",
      name: "birthday",
      type: "date",
      placeholder: "",
    },
    data: {
      required: "생년월일 필수 항목입니다.",
    },
  },
  {
    info: {
      label: "학교명 및 현재학년(2023년 기준)",
      name: "schoolName",
      type: "text",
      placeholder: "학교와 학년을 입력해 주세요",
    },
    data: {
      required: "학교와 학년은 필수 항목입니다.",
    },
  },
  {
    info: {
      label: "신청자 핸드폰 번호",
      name: "phoneNumber",
      type: "text",
      placeholder: "핸드폰 번호를 입력해 주세요",
    },
    data: {
      required: "핸드폰 번호는 필수 항목입니다.",
      pattern: {
        message: "정확한 번호를 입력해 주세요",
        value: `${phoneNumber}`,
      },
    },
  },
  {
    info: {
      label: "신청자 성별",
      name: "radio",
      type: "radio",
      value: "남자",
    },
    data: {
      required: "성별은 필수 항목입니다.",
    },
  },
  {
    info: {
      label: "",
      name: "radio",
      type: "radio",
      value: "여자",
    },
    data: {
      required: "성별은 필수 항목입니다.",
    },
  },
  // {
  //   info: {
  //     label: "비밀번호",
  //     name: "password",
  //     type: "password",
  //     placeholder: "비밀번호를 입력해 주세요",
  //   },
  //   data: {
  //     required: "비밀번호는 필수 항목입니다.",
  //     pattern: {
  //       message: "8~16자 영문 대/소문자, 숫자, 특수문자만 사용 가능합니다",
  //       value: passwordRegex,
  //     },
  //   },
  // },
  // {
  //   info: {
  //     label: "비밀번호 확인",
  //     name: "checkPassword",
  //     type: "password",
  //     placeholder: "비밀번호를 재입력 해주세요",
  //   },
  //   data: {
  //     required: "비밀번호체크",
  //     validate: (value) =>
  //       value === watch("password") || "비밀번호가 일치하지 않습니다.",
  //   },
  // },
];
