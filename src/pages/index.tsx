import { useQuery } from '@tanstack/react-query';
import { TodoList, type TodoListType } from '@/components/TodoList';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  const { data, isLoading, isError } = useQuery<TodoListType>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(
        'https://mocki.io/v1/d392411d-4379-436f-adb1-440ed09839b2'
      );
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data. Please try again</div>;
  }

  console.log('data', data);

  return (
    <main
      className={`flex flex-col items-center justify-start px-6 py-14 text-base`}
    >
      <Header />
      {data && <TodoList todos={data} />}
      <Footer />
    </main>
  );
}
