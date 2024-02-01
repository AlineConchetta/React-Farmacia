import { FacebookLogo, InstagramLogo} from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center  bg-green-300">
                <div className="container flex flex-col items-center py-2">
                    <p className='text-xl font-bold'> FarmaVida </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-3 py-1'>
                        <a href="" target='_blank'><FacebookLogo size={40} weight='bold' /></a>
                        <a href="" target='_blank'><InstagramLogo size={40} weight='bold' /></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer