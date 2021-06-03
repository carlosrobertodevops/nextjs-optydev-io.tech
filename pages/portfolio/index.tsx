import Head from 'next/head'
import Link from 'next/link'
import { FaFilePdf } from 'react-icons/fa'

import { Container, Project, Text } from '../../styles/portfolio/styles'
import Button from '../../components/Button'
import SpecialButton from '../../components/SpecialButton'

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Porifilio | optydev-io.tech</title>
        <meta name="og:title" property="og:title" content="Portfolio" />
        <meta name="description" content={process.env.APP_TEMA} />
      </Head>
      <Container>
        <h1>
          <img
            width="100"
            height="25"
            src="/assets/optydev.io.png"
            alt="Logo AWS"
          />
          {''} Consultoria{''}
        </h1>

        <strong>
          - DevOps:
          <span> </span>
        </strong>
        <Link href="/portfolio/devops">
          <a>
            <Button>ver mais</Button>
          </a>
        </Link>
        <strong>
          - FullStack:
          <span> </span>
        </strong>
        <Link href="/portfolio/fullstack">
          <a>
            <Button>ver mais</Button>
          </a>
        </Link>
        <strong>
          - FullCycle:
          <span> </span>
        </strong>
        <Link href="/portfolio/fullstack">
          <a>
            <Button>ver mais</Button>
          </a>
        </Link>
        <strong>
          - NoCode:
          <span> </span>
        </strong>
        <Link href="/portfolio/fullstack">
          <a>
            <Button>ver mais</Button>
          </a>
        </Link>
        <strong>
          - LowCode:
          <span></span>
        </strong>
        <Link href="/portfolio/lowcode">
          <a>
            <Button>ver mais</Button>
          </a>
        </Link>
        <strong>
          - HighCode:
          <span></span>
        </strong>

        <SpecialButton link="/portfolio/highcode">
          <FaFilePdf color="#64f4ac" />
        </SpecialButton>

        <h1>
          <img
            width="100"
            height="25"
            src="/assets/optydev.io.png"
            alt="Logo AWS"
          />
          {''} Tecnologias{''}
        </h1>

        <Project>
          <img src="/assets/aws.png" alt="Logo AWS" />
          <Text>
            <strong>
              - AWS:
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/aws">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/gcp.png" alt="Logo GCP" />
          <Text>
            <strong>
              - GCP:
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>

            <Link href="/portfolio/gcp">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/azure.png" alt="Logo Azure" />
          <Text>
            <strong>
              - AZURE:
              <span></span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/azure">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/nextjs.png" alt="NextJS" />
          <Text>
            <strong>
              - NextJS
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span></span>
            </strong>
            <Link href="/portfolio/nextjs">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/serverless.png" alt="Logo Serverless" />
          <Text>
            <strong>
              - Serverless:
              <span></span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/serverless">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/ts.png" alt="Logo TS" />
          <Text>
            <strong>
              - Typescript:
              <span></span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span></span>
            </strong>

            <Link href="/portfolio/ts">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>
      </Container>
    </>
  )
}
