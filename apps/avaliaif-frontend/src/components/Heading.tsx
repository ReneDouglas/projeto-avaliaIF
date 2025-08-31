export function Heading(props: { children: React.ReactNode }) {
  return (
    <header className='w-full bg-white shadow-md p-4'>
      <div className='container mx-auto'>
        <h1 className='text-2xl text-green-700'>{props.children}</h1>
      </div>
    </header>
  );
}
