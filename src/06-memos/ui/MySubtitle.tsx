import { memo } from "react";

interface SubtitleProps {
  subtitle: string
}

export const MySubtitle = memo(({ subtitle }: SubtitleProps) => {

  console.log('mysubtitle re-render');

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar a función</button>
    </>
  )
})
