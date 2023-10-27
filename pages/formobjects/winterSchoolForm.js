import { nameRegex } from "./regex";
import { phoneNumber } from "./regex";
// import { passwordRegex } from "./abc";

export const winterSchoolForm = [
  "WinterSchool",
  [
    {
      info: {
        label: "1. 신청자 성명",
        name: "nickName",
        type: "text",
        placeholder: "이름을 입력해 주세요",
      },
      data: {
        required: "이름은 필수 항목입니다.",
        pattern: {
          message: "한글 이름을 입력해 주세요.",
          value: `${nameRegex}`,
        },
      },
    },
    [
      {
        info: {
          label: "2. 신청자와의 관계",
          name: "relationship",
          type: "radio",
          value: "학생 본인",
        },
        data: {
          required: "",
        },
      },
      {
        info: {
          label: "",
          name: "relationship",
          type: "radio",
          value: "부",
        },
        data: {
          required: "",
        },
      },
      {
        info: {
          label: "",
          name: "relationship",
          type: "radio",
          value: "모",
        },
        data: {
          required: "",
        },
      },
      {
        info: {
          label: "",
          name: "relationship",
          type: "radio",
          value: "기타",
        },
        data: {
          required: "신청자와의 관계는 필수 항목입니다.",
        },
      },
    ],
    [
      {
        info: {
          label: "3. 신청자 성별",
          name: "gender",
          type: "radio",
          value: "남자",
        },
        data: {
          required: "",
        },
      },
      {
        info: {
          label: "",
          name: "gender",
          type: "radio",
          value: "여자",
        },
        data: {
          required: "성별은 필수 항목입니다.",
        },
      },
    ],
    {
      info: {
        label: "4. 신청자 생년월일",
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
        label: "5. 신청자 이메일",
        name: "email",
        type: "text",
        placeholder: "이메일을 입력해 주세요",
      },
      data: {},
    },
  ],
  [
    {
      info: {
        label: "6. 신청자 핸드폰 번호",
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
        label: "7. 보호자 핸드폰 번호",
        name: "phone",
        type: "text",
        placeholder: "핸드폰 번호를 입력해 주세요",
      },
      data: {
        pattern: {
          message: "정확한 번호를 입력해 주세요",
          value: `${phoneNumber}`,
        },
      },
    },
    {
      info: {
        label: "8. 학교명 및 현재학년 (2023년 기준)",
        name: "schoolName",
        type: "text",
        placeholder: "이름을 입력해 주세요",
      },
      data: {
        required: "학교명 및 현재학년은 필수 항목입니다.",
      },
    },
    [
      {
        info: {
          label: "9. 계열구분",
          name: "classFunction",
          type: "radio",
          value: "인문계열",
        },
        data: {
          required: "계열구분은 필수 항목입니다.",
        },
      },
      {
        info: {
          label: "",
          name: "classFunction",
          type: "radio",
          value: "자연계열",
        },
        data: {
          required: "계열구분은 필수 항목입니다.",
        },
      },
      {
        info: {
          label: "",
          name: "classFunction",
          type: "radio",
          value: "예체능",
        },
        data: {
          required: "계열구분은 필수 항목입니다.",
        },
      },
    ],
  ],
  //

  // 비밀번호 입력란
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
