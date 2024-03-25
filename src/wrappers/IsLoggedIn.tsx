import { useAppwriteContext } from "@/hooks/appwrite";
import { useEffect } from "react";
import { useNavigate } from "react-router";

type IsLoggedInWrapperProps = {
    children: React.ReactNode;
};

export const IsLoggedInWrapper = ({ children }: IsLoggedInWrapperProps) => {
    const { user } = useAppwriteContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/sign-in');
        }
    }, [navigate, user]);

    return children;
}
