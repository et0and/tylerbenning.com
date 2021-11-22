import Link from 'next/link';
export default function Nav (){
    return (
        <div className="space-x-4 my-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>)

}