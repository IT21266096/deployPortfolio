import React from 'react';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
  Divider,
} from '@nextui-org/react';
import ProjectsData from '../assets/project/projectsData.json';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function App() {
  const [selected, setSelected] = React.useState('Web Applications');
  const [value, setValue] = React.useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const findData = (data, id) => data.find((item) => item.id === id);

  const result = findData(ProjectsData, value);

  const imgHover = {
    imgHover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full px-5 py-10 md:py-20 md:px-20" id="projects">
      <h1 className="text-center mb-10 text-6xl text-clrTitle">PROJECTS</h1>
      <Tabs
        aria-label="Options"
        items={ProjectsData}
        selectedKey={selected}
        onSelectionChange={setSelected}
        color="primary"
        radius="full"
        classNames={{
          tabList:
            'gap-6 w-full relative rounded-full p-2 border-b border-divider',
          tab: 'w-[180px] text-lg px-0 h-12 outline-none',
        }}
      >
        <Tab key="Web Applications" title="Web Applications">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {ProjectsData.map((item, index) => (
              <Card className="w-full py-4" key={index}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center overflow-hidden">
                  <motion.div variants={imgHover} whileHover="imgHover">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={item.pic}
                      width="100%"
                    />
                  </motion.div>
                </CardHeader>
                <CardBody className="overflow-visible py-2 flex flex-col gap-2">
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-tiny uppercase">{item.type}</p>
                  <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-clrTitle">
                    <small className="text-sm">{item.year}</small>
                    <small className="text-sm font-semibold">{item.tech}</small>
                  </div>
                </CardBody>
                <CardFooter className="w-full justify-end px-4">
                  <Button
                    size="md"
                    radius="full"
                    color="primary"
                    onPress={onOpen}
                    onClick={() => {
                      setValue(item.id);
                    }}
                  >
                    View more
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              backdrop="blur"
              size="5xl"
              scrollBehavior="outside"
            >
              <ModalContent>
                {(onClose) => (
                  <div className="py-6">
                    <ModalBody>
                      <div className="w-full flex flex-col gap-1">
                        <div className="flex justify-center overflow-hidden items-center">
                          <motion.div variants={imgHover} whileHover="imgHover">
                            <Image
                              alt="Card background"
                              className="object-cover rounded-xl mb-2 mx-auto"
                              src={result.pic}
                              width="100%"
                            />
                          </motion.div>
                        </div>

                        <h3 className="text-xl font-medium">{result.name}</h3>
                        <h4>{result.type}</h4>
                        <div className="flex gap-4 text-clrTitle">
                          <small className="text-[1rem]">{result.year}</small>
                          <small className="text-[1rem] font-semibold">
                            {result.tech}
                          </small>
                        </div>
                        <p className="mt-4 text-justify">
                          {result.description}
                        </p>
                      </div>
                    </ModalBody>
                    <ModalFooter className="flex gap-4">
                      <Link
                        color=""
                        isExternal
                        href={result.link}
                        showAnchorIcon
                        size="md"
                        className="font-semibold"
                      >
                        Get Code
                      </Link>
                      {result.live !== '' && (
                        <Link
                          isExternal
                          href={result.live}
                          showAnchorIcon
                          size="md"
                          className="font-semibold"
                        >
                          Live Demo
                        </Link>
                      )}
                    </ModalFooter>
                  </div>
                )}
              </ModalContent>
            </Modal>
          </div>
        </Tab>
        <Tab key="UI/UX Projects" title="UI/UX Projects">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <Card>
              <CardBody>
                <iframe
                  src="https://www.behance.net/embed/project/188185785?ilo0=1"
                  height="350"
                  width="100%"
                  allowfullscreen
                  lazyload
                  frameborder="0"
                  allow="clipboard-write"
                  refererPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <iframe
                  src="https://www.behance.net/embed/project/187467985?ilo0=1"
                  height="350"
                  width="100%"
                  allowfullscreen
                  lazyload
                  frameborder="0"
                  allow="clipboard-write"
                  refererPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </CardBody>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
}
