import useAuthStore from "@/stores/store";
import {
  POSTLoginRequest,
  LoginResponseType,
  LoginRequestBody,
} from "@/_types";
import api from "@/services/axios";

export async function loginRequest(
  loginBody: LoginRequestBody
): Promise<POSTLoginRequest> {
  try {
    const response = await api.post<LoginResponseType>(
      `security/login`,
      loginBody
    );
    const { token, expirationDate } = response.data.data;

    useAuthStore.getState().setToken(token);
    useAuthStore.getState().setExpirationDate(expirationDate);
    return 200; // Ou outro código de sucesso, se necessário
  } catch (e) {
    console.error(e);
    return -1; // Ou outro valor padrão
  }
}
