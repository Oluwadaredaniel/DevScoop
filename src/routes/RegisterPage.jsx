import { SignUp } from "@clerk/clerk-react";

const devscoopTheme = {
  variables: {
    colorPrimary: "#2563EB",
    colorPrimaryLight: "#60A5FA",
    colorText: "#E0E7FF",
    colorBackground: "#0F1117",
    colorError: "#EF4444",
    borderRadius: "12px",
    fontFamily: "'Inter', sans-serif",
    colorPlaceholder: "#9CA3AF",
  },
  layout: {
    logoBoxBackground: "#0F1117",
  },
  elements: {
    card: {
      backgroundColor: "#181B27",
      boxShadow: "0 4px 15px rgba(37, 99, 235, 0.6)",
      borderRadius: "12px",
    },
    headerTitle: {
      color: "#60A5FA",
      fontWeight: "700",
      fontSize: "1.5rem",
    },
    formButtonPrimary: {
      backgroundColor: "#2563EB",
      color: "#E0E7FF",
      borderRadius: "9999px",
      fontWeight: "700",
      boxShadow: "0 0 8px #2563EB",
      transition: "background-color 0.3s ease",
      ":hover": {
        backgroundColor: "#1D4ED8",
        boxShadow: "0 0 12px #1D4ED8",
      },
    },
    input: {
      backgroundColor: "#1E2131",
      color: "#E0E7FF",
      borderRadius: "12px",
      border: "1px solid #2563EB",
      "::placeholder": {
        color: "#9CA3AF",
        opacity: 1,
      },
      ":focus": {
        borderColor: "#60A5FA",
        boxShadow: "0 0 8px #60A5FA",
      },
    },
    link: {
      color: "#60A5FA",
      ":hover": {
        color: "#2563EB",
        textDecoration: "underline",
      },
    },
    oauthButtonIcon: {
      color: "#E0E7FF",
      filter: "drop-shadow(0 0 2px rgba(37, 99, 235, 0.7))",
    },
  },
};

const RegisterPage = () => {
  return (
    <>
      <style>{`
        .cl-socialButtonsIconButton {
          background-color: #2c3e50 !important;
          color: white !important;
          border-radius: 12px !important;
          border: 1px solid #2563EB !important;
          padding: 8px 14px !important;
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.5) !important;
          transition: background-color 0.3s ease, box-shadow 0.3s ease !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 500 !important;
          font-size: inherit !important;
        }
        .cl-socialButtonsIconButton:hover {
          background-color: #2563EB !important;
          box-shadow: 0 0 14px #2563EB !important;
          color: white !important;
        }
        .cl-socialButtonsProviderIcon {
          filter: none !important;
          width: 20px !important;
          height: 20px !important;
          mix-blend-mode: normal !important;
        }
      `}</style>

      <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-[#0F1117]">
        <SignUp appearance={{ baseTheme: devscoopTheme }} signInUrl="/login" />
      </div>
    </>
  );
};

export default RegisterPage;
