"use client";
import Link from "next/link";
import { Github } from 'lucide-react';

import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { createApiClient } from "@/utils/supabase/api";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "../ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthState, StateInfo } from "../../utils/types";

export function AuthForm({ state }: { state: AuthState }) {
	const { toast } = useToast();
	const api = createApiClient(createClient());
	const searchParams = useSearchParams();
	const router = useRouter();
	const [authState, setAuthState] = useState(state);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const stateInfo: Record<AuthState, StateInfo> = {
		signup: {
			title: "Cadastre-se",
			submitText: "Cadastrar",
			hasEmailField: true,
			hasPasswordField: true,
			hasOAuth: false,
			onSubmit: async () => {
				setLoading(true);
				try {
					await api.passwordSignup({ email, password });
					await api.passwordSignin({ email, password });
					router.refresh();
				} catch (e) {
					if (e instanceof Error) {
						toast({
							title: "Auth Erro",
							description: e.message,
							variant: "destructive"
						});
					}
				}
				setLoading(false);
			}
		},
		signin: {
			title: "Entrar",
			submitText: "Entrar",
			hasEmailField: true,
			hasPasswordField: true,
			hasOAuth: true,
			onSubmit: async () => {
				setLoading(true);
				try {
					await api.passwordSignin({ email, password });
					router.refresh();
				} catch (e) {
					if (e instanceof Error) {
						toast({
							title: "Ocorreu um erro, verifique seus dados",
							description: e.message,
							variant: "destructive"
						});
					}
				}
				setLoading(false);
			}
		},
		forgot_password: {
			title: "Resetar Senha",
			submitText: "Enviar Email",
			hasEmailField: true,
			hasPasswordField: false,
			hasOAuth: false,
			onSubmit: async () => {
				setLoading(true);
				try {
					await api.passwordReset(email);
					toast({
						title: "Email enviado!",
						description:
							"Verifique seu email para resetar sua senha"
					});
				} catch (e) {
					if (e instanceof Error) {
						toast({
							title: "Autenticação falhou",
							description: e.message,
							variant: "destructive"
						});
					}
				}
				setLoading(false);
			}
		},
		update_password: {
			title: "Atualizar senha",
			submitText: "Update Password",
			hasEmailField: false,
			hasPasswordField: true,
			hasOAuth: false,
			onSubmit: async () => {
				setLoading(true);
				try {
					await api.passwordUpdate(password);
					toast({
						title: "Sua senha foi atualizada",
						description: "Redirecionando para pagina inicial..."
					});
					setTimeout(() => router.replace("/"), 3000);
					router.replace("/");
				} catch (e) {
					if (e instanceof Error) {
						toast({
							title: "Falha na autenticação",
							description: e.message,
							variant: "destructive"
						});
					}
				}
				setLoading(false);
			}
		}
	};

	// add toast if error
	useEffect(() => {
		type ToastVariant = "destructive" | "default" | undefined | null;
		const title = searchParams.get("toast_title") || undefined;
		const description = searchParams.get("toast_description") || undefined;
		const variant = searchParams.get("toast_variant") as ToastVariant;
		if (title || description) {
			setTimeout(
				() =>
					toast({
						title,
						description,
						variant
					}),
				100
			);
		}
	}, []);

	const currState = stateInfo[authState];
	return (
		<Card className="mx-auto w-96 px-4 border border-border/70 dark:border-border bg-gray-100 dark:bg-subbackground touch-pan-x touch-pan-y">
			<CardHeader>
				<CardTitle className="text-2xl">{currState.title}</CardTitle>
				{currState.description && (
					<CardDescription>{currState.description}</CardDescription>
				)}
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					{currState.hasEmailField && (
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								className="text-black dark:text-text bg-gray-100 dark:bg-subbackground border border-gray-600 dark:border-border"
								placeholder="email@examplo.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
								disabled={loading}
								required
							/>
						</div>
					)}
					{currState.hasPasswordField && (
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Senha</Label>
								{authState === "signin" && (
									<Link
										href="#"
										onClick={() =>
											setAuthState(
												AuthState.ForgotPassword
											)
										}
										className="ml-auto inline-block text-sm underline">
										Esqueçeu a senha?
									</Link>
								)}
							</div>
							<Input
								id="password"
								placeholder="Digite sua senha"
								className="text-black dark:text-text bg-gray-100 dark:bg-subbackground border border-gray-600 dark:border-border"
								type="password"
								disabled={loading}
								value={password}
								required
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					)}
					<Button
						type="submit"
						className="w-full text-text bg-btn hover:bg-btn/80 dark:text-text dark:bg-btn"
						onClick={currState.onSubmit}
						disabled={loading}>
						{currState.submitText}
					</Button>
					{authState === "signin" && (
						<div className="text-center text-sm">
							Ainda não tem uma conta?{" "}
							<Link
								href="#"
								className="underline"
								onClick={() => setAuthState(AuthState.Signup)}>
								cadastre-se
							</Link>
						</div>
					)}
					{authState === "signup" && (
						<div className="text-center text-sm">
							Ja tem uma conta?{" "}
							<Link
								href="#"
								className="underline"
								onClick={() => setAuthState(AuthState.Signin)}>
								Entrar
							</Link>
						</div>
					)}
					{authState === "forgot_password" && (
						<div className="text-center text-sm">
							Lembrou sua senha?{" "}
							<Link
								href="#"
								className="underline"
								onClick={() => setAuthState(AuthState.Signin)}>
								Entrar
							</Link>
						</div>
					)}
					{currState.hasOAuth && (
						<>
							<div className="relative my-3">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t"></span>
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-gray-100 dark:bg-subbackground px-2 text-muted-foreground">
										Ou continue com
									</span>
								</div>
							</div>
							<Button
								variant="outline"
								className="w-full gap-2 text-black dark:text-black hover:text-black dark:hover:text-black hover:bg-gray-200 dark:hover:bg-gray-200 bg-gray-100 dark:bg-gray-100 border border-border dark:border-border"
								onClick={() => api.oauthSignin("google")}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="20"
									height="20"
									viewBox="0 0 48 48">
									<path
										fill="#FFC107"
										d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
									<path
										fill="#FF3D00"
										d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
									<path
										fill="#4CAF50"
										d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
									<path
										fill="#1976D2"
										d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
								</svg>{" "}
								Google
							</Button>
							<Button
								variant="outline"
								className="w-full gap-2 text-black hover:text-black dark:hover:text-black bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-200 border border-border"
								onClick={() => api.oauthSignin("github")}>
								<Github className="text-black h-4 w-4 dark:text-black" />
								Github
							</Button>
						</>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
