import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function Detail() {
    const router = useRouter();

    return (
        <>
            <Seo title={router.query.title}/>
            <h4>{router.query.title}</h4>
        </>

    )
}