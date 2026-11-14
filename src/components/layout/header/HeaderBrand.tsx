import Image from 'next/image';

export default function HeaderBrand() {
  return (
    <div
      className={[
        'flex shrink-0 cursor-default items-center gap-[11px] max-[410px]:gap-[5px]',
        'group-data-[ref]/header:min-[650px]:max-[1100px]:gap-[5px]',
      ].join(' ')}
      aria-label="درمانگاه خیریه دارالشفاء امام مجتبی"
    >
      <Image
        src={'/images/brand/clinic-logo-new.jpg'}
        alt="نشان درمانگاه دارالشفاء امام مجتبی"
        width={72}
        height={63}
        className={[
          'h-[63px] w-[72px] object-contain',
          'max-[1100px]:w-[60px]',
          'max-[760px]:h-[55px] max-[760px]:w-[54px]',
          'max-[410px]:h-[47px] max-[410px]:w-10',
          'group-data-[ref]/header:min-[650px]:max-[1100px]:h-[55px] group-data-[ref]/header:min-[650px]:max-[1100px]:w-[50px]',
        ].join(' ')}
      />
      <div className="flex flex-col whitespace-nowrap leading-[1.7] text-[#075b37] font-(--font-iran-nastaliq)">
        <strong
          className={[
            'font-[family-name:IranNastaliq,serif] font-normal leading-[1.8]',
            'text-[25px] max-[1100px]:text-[21px] max-[1000px]:text-[20px] max-[480px]:text-[15px]',
            'group-data-[ref]/header:min-[801px]:max-[1100px]:text-[23px] group-data-[ref]/header:min-[650px]:max-[800px]:text-[19px]',
          ].join(' ')}
        >
           دارالشفاء امام مجتبی (ع)
        </strong>
      </div>
    </div>
  );
}
