import site from '@/site'
function AboutTemplate() {
  const { description } = site
  return (
    <div className="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <main className="mt-24 shadow">
        <div>
          <div className="container mx-auto px-4 py-24 relative">
            <div className="flex flex-wrap items-center justify-center">
              <div className="mx-auto p-4 rounded-2xl w-full sm:w-4/5 lg:w-5/12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
                <div className="flex flex-wrap justify-between sm:flex-nowrap">
                  <div className="p-5 text-center w-full whitespace-nowrap">
                    <h5>Meta-framework</h5>
                    <p className="text-primary-600 dark:text-primary-200">
                      Vite-powered{' '}
                    </p>
                  </div>
                  <div className="hidden items-center justify-center my-4 relative w-1 sm:flex">
                    <span
                      className="-ml-px absolute h-full w-0.5 bg-neutral-50 dark:bg-neutral-900"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex h-2 items-center justify-center my-4 relative w-full sm:hidden">
                    <span
                      className="-ml-px absolute w-full h-0.5 bg-neutral-50 dark:bg-neutral-900"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-5 text-center w-full whitespace-nowrap">
                    <h5>UI-framework</h5>
                    <p className="text-primary-600 dark:text-primary-200">
                      Tailwind CSS{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 mx-auto px-2 py-4 text-center w-full sm:w-4/5 lg:mt-0 lg:text-left lg:w-5/12">
                <h3 className="capitalize mb-2">About This Template</h3>
                <h6 className="capitalize mb-2 text-primary-600 dark:text-primary-200">
                  {description}{' '}
                </h6>
                <p className="mb-6 pt-3">
                  This is a starter template that pre-includes the{' '}
                  <a
                    className="ml-1 font-mono text-sm underline text-primary-600 dark:text-primary-200"
                    target="_blank"
                    href="https://www.npmjs.com/package/@pinegrow/vite-plugin"
                  >
                    Pinegrow Vite Plugin{' '}
                  </a>{' '}
                  <span>, </span>{' '}
                  <a
                    className="font-mono text-sm underline text-primary-600 dark:text-primary-200 mr-1"
                    target="_blank"
                    href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
                  >
                    Pinegrow Tailwind CSS Plugin{' '}
                  </a>
                  that enables you to visually design your Vue single-file
                  components in Vue Designer.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutTemplate
