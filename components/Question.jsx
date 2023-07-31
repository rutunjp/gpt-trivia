import RetroButton from './RetroButton'

export default function Question() {
  return (
    <div className="w-[600px] h-[214px] p-4 bg-white rounded-3xl shadow border border-slate-900 flex-col justify-start items-end gap-2 inline-flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 text-slate-800 text-2xl font-black tracking-tight leading-loose">
          Which country won the first ICC Cricket World Cup in 1975?
        </div>
        <div className="w-6 h-6 p-[7px] justify-center items-center flex" />
      </div>
      <div className="self-stretch h-[102px] bg-blue-100" />

      <RetroButton />
    </div>
  )
}
