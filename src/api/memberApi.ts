
const API_BASE_URL = "http://localhost:8090/api/auth";

export interface SignupRequest {
    member_id: string;
    password: string;
    nickname: string;
    gender: string;
}

export interface SignupResponse {
    message: string;
}

// 회원가입
export async function signup(
    signupData: SignupRequest
): Promise<SignupResponse> {

    const url = `${API_BASE_URL}/signup`;

    console.log("===== 회원가입 요청 =====");
    console.log("요청 URL:", url);
    console.log("요청 데이터:", signupData);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        });

        console.log("===== 회원가입 응답 =====");
        console.log("응답 상태:", response.status);
        console.log("응답 URL:", response.url);

        const responseText = await response.text();

        console.log("응답 내용:", responseText);

        if (!response.ok) {
            let message = `회원가입 실패 (HTTP ${response.status})`;

            if (responseText) {
                try {
                    const errorData = JSON.parse(responseText);
                    message = errorData.message
                        || errorData.error
                        || message;
                } catch {
                    message = responseText;
                }
            }

            throw new Error(message);
        }

        if (!responseText) {
            return {
                message: "회원가입이 완료되었습니다."
            };
        }

        return JSON.parse(responseText);

    } catch (error) {
        console.error("회원가입 통신 오류:", error);
        throw error;
    }
}

// 회원 탈퇴
export async function withdraw(token: string): Promise<void> {

    const url = `${API_BASE_URL}/withdraw`;

    console.log("===== 회원 탈퇴 요청 =====");
    console.log("요청 URL:", url);

    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        console.log("===== 회원 탈퇴 응답 =====");
        console.log("응답 상태:", response.status);

        if (!response.ok) {
            const responseText = await response.text();

            console.error("응답 내용:", responseText);

            let message = `회원 탈퇴 실패 (HTTP ${response.status})`;

            if (responseText) {
                try {
                    const errorData = JSON.parse(responseText);
                    message = errorData.message
                        || errorData.error
                        || message;
                } catch {
                    message = responseText;
                }
            }

            throw new Error(message);
        }

        console.log("회원 탈퇴 성공");

    } catch (error) {
        console.error("회원 탈퇴 통신 오류:", error);
        throw error;
    }
}
