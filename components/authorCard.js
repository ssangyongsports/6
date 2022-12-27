import Image from "next/image";

export default function AuthorCard({ author }) {
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          {imageProps && (
          
                <Image
                 loader={myLoader}
                 src="i.ibb.co/LxrqRtB/1-1.png"
              objectFit="cover"
              alt={author.name}
              placeholder="blur"
              layout="fill"
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              作者 Peter yang
            </h4>
          </div>
          <div>
 Peter yang在2017與Steven聯合創立雙龍體育,目前是雙龍體育主席兼網頁設計師
 </div>
        </div>
      </div>
    </div>
  );
}
