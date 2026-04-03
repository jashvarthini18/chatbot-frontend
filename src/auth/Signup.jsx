import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "./AuthLayout";
import { signup } from "../api/auth";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordRules = {
    length: form.password.length >= 8,
    upper: /[A-Z]/.test(form.password),
    lower: /[a-z]/.test(form.password),
    special: /[^A-Za-z0-9]/.test(form.password),
  };

  const passwordValid =
    passwordRules.length &&
    passwordRules.upper &&
    passwordRules.lower &&
    passwordRules.special;

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!passwordValid) {
      setError("Password does not meet requirements");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup({
        email: form.email,
        password: form.password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Create your account">
      <form onSubmit={submit} className="space-y-4">

        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 text-sm"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 text-sm pr-10"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <div className="text-xs space-y-1">
          <Rule ok={passwordRules.length} text="At least 8 characters" />
          <Rule ok={passwordRules.upper} text="1 uppercase letter" />
          <Rule ok={passwordRules.lower} text="1 lowercase letter" />
          <Rule ok={passwordRules.special} text="1 special character" />
        </div>

        <input
          type={showPassword ? "text" : "password"}
          required
          placeholder="Confirm password"
          className="w-full border rounded-lg px-3 py-2 text-sm"
          onChange={(e) =>
            setForm({ ...form, confirm: e.target.value })
          }
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          disabled={!passwordValid}
          className="w-full bg-slate-900 text-white rounded-lg py-2 text-sm disabled:opacity-50"
        >
          Sign up
        </button>
      </form>

      <p className="text-sm text-center mt-6 text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-slate-900">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}

function Rule({ ok, text }) {
  return (
    <p className={ok ? "text-green-600" : "text-slate-400"}>
      {ok ? "✔" : "•"} {text}
    </p>
  );
}
