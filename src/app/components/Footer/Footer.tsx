export const Footer = () => {
  return (
    <footer className="h-[128px] flex items-center bg-dark-500 fs-[11px]">
      <span className="container mx-auto">
        <span className="mr-[45px] hover:cursor-pointer hover:text-primary-400">
          運営会社
        </span>
        <span className="mr-[45px] hover:cursor-pointer hover:text-primary-400">
          会員登録
        </span>
        <span className="mr-[45px] hover:cursor-pointer hover:text-primary-400">
          利用規約
        </span>
        <span className="mr-[45px] hover:cursor-pointer hover:text-primary-400">
          個人情報の取扱について
        </span>
        <span className="mr-[45px] hover:cursor-pointer hover:text-primary-400">
          特定商取引法に基づく表記
        </span>
        <span className="hover:cursor-pointer hover:text-primary-400">
          お問い合わせ
        </span>
      </span>
    </footer>
  );
};
