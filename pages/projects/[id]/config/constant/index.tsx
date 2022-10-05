import { useRouter } from "next/router";
import { useEffect } from "react";

const ProjectConfigConstantPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/projects/${router.query.id}/config`)
    }, [router]);
    return null
}
export default ProjectConfigConstantPage;