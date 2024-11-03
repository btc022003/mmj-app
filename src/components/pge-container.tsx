function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className='flex-1 overflow-auto p-2'>{children}</div>;
}

export default PageContainer;
