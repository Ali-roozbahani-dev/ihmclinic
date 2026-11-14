import { Menu, X } from 'lucide-react';

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

/** دکمه‌ی همبرگری منوی موبایل. */
export default function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      className={[
        'hidden bg-transparent text-[#00633e] max-[760px]:block',
        'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2bb798]!',
        // صفحات مرجع: منوی افقی جای همبرگری را می‌گیرد
        'group-data-[ref]/header:min-[650px]:max-[1100px]:hidden',
      ].join(' ')}
      aria-label={isOpen ? 'بستن منو' : 'نمایش منو'}
      aria-controls="header-main-navigation"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
    </button>
  );
}
