import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "./AuthLayout";
import { login } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login({
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", data.access_token);

      navigate("/workspace", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Welcome back">
      <form onSubmit={submit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 text-sm"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 text-sm pr-10"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="w-full bg-slate-900 text-white rounded-lg py-2 text-sm hover:bg-slate-800">
          Log in
        </button>
      </form>

      <p className="text-sm text-center mt-6 text-slate-500">
        Don’t have an account?{" "}
        <Link to="/signup" className="font-medium text-slate-900">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
