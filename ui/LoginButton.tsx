import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function LoginButton() {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "#001F24",
        color: "white",
        "&:hover": { backgroundColor: "#001F24", color: "white" },
      }}
      onClick={() => router.push("/login")}
    >
      Admin Login
    </Button>
  );
}
