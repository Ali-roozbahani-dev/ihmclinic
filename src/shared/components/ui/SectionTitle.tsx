interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  /** برای aria-labelledby روی section والد. */
  titleId?: string;
}

export default function SectionTitle({ eyebrow, title, titleId }: SectionTitleProps) {
  return (
    <div className="mb-[27px] text-center">
      {eyebrow && <p className="mb-[5px] text-[19px] text-[#666] max-[760px]:text-[14px]">{eyebrow}</p>}
      <h2 id={titleId} className="text-[26px] font-extrabold max-[760px]:text-[20px]">
        {title}
      </h2>
    </div>
  );
}
