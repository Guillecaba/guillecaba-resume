import { Icon } from "@iconify-icon/react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../components/container";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Title from "../components/title";
import { Position } from "../types/position";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="w-full lg:w-1/4">
        <Container>
          <Sidebar />
        </Container>
      </div>
      <div className="w-full lg:w-3/4">
        <Container>
          <div className="flex space-y-8 flex-col">
            <section id="experience">
              <Title>{t("work-history.title")}</Title>
              <div className="space-y-6">
                {t<string, Position[]>("work-history.positions", {
                  returnObjects: true,
                }).map((position, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{position.title}</h3>
                    <p>
                      <small>{position.duration}</small>
                    </p>
                    <ul className="list-disc list-inside">
                      {position.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section id="academic">
              <Title>{t("academic.title")}</Title>
              <h3 className="font-semibold">{t("academic.description")}</h3>
              <p>
                <small>{t("academic.duration")}</small>
              </p>
              <ul className="list-disc list-inside">
                {t<string, string[]>("academic.content", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="showcase">
              <Title>{t("showcase.title")}</Title>
              <p>{t("showcase.description")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                <div>
                  <h3 className="font-semibold mb-1">
                    Schoenstatt Fathers social app
                  </h3>
                  <p>Social Network for the Schoenstatt Fathers Community</p>
                  <div className="text-lg space-x-4">
                    <a
                      href="https://apps.apple.com/py/app/schoenstatt-fathers/id1529143700"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Redirect to Apple Appstore"
                    >
                      <Icon
                        icon="ion:logo-apple-appstore"
                        alt="apple appstore"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.schoenstatt.fathersApp"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Redirect to Playstore"
                    >
                      <Icon
                        icon="ion:logo-google-playstore"
                        alt="google playstore"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Stoplight Mobile</h3>
                  <p>
                    Innovative app for tracking and understanding
                    multidimensional poverty
                  </p>
                  <div className="text-lg space-x-4">
                    <a
                      href="https://apps.apple.com/ph/app/stoplight-mobile/id1602232536"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Redirect to Apple Appstore"
                    >
                      <Icon
                        icon="ion:logo-apple-appstore"
                        alt="apple appstore"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.povertystoplightapp&hl=en&gl=US"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Redirect to Playstore"
                    >
                      <Icon
                        icon="ion:logo-google-playstore"
                        alt="google playstore"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Whatta</h3>
                  <p>
                    Labor/Time tracking and corresponding daily P&L reporting
                    platform.
                  </p>
                  <div className="text-lg space-x-4">
                    <a
                      href="https://whatta.demo.wheelhousepackaging.com/checkin"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="Redirect to website of checkin whatta"
                    >
                      <Icon icon="ion:globe-outline" alt="website" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section id="skills">
              <Title>{t("skills.title")}</Title>
              <ul className="list-disc list-inside">
                {t<string, string[]>("skills.content", {
                  returnObjects: true,
                }).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
