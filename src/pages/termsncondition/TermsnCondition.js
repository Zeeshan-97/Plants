import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/termsncondition.css";
import Header from "../../component/Header";
import commas from "../../assets/images/comas.png";

const TermsnCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <section className="testimonial_page termsncondition">
                <Header />
                <section className="testimonial_sec">
                    {/* universal top section start here */}
                    <div className="universal_top">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-7">
                                <div className="heading_top mt-5">
                                    <h3><h3 className="green_head">TERMS AND </h3>CONDITIONS</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, elta consectetur adipiscing elit
                                        ut elit tellus Maecenas sed diam eget risus varius blandit
                                        sit amet
                                    </p>
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    {/* universal top section end here */}
                    {/* testimonial section start here */}
                    <section className="testimonial_section">
                        <div className="container">
                            <div className="testimonial_content">
                                <div className="testi">
                                    <h4>What is Lorem Ipsum?</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.

                                    </p>

                                </div>
                                <div className="testi">
                                    <h4>Why do we use it?</h4>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                                        for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                                        sometimes on purpose (injected humour and the like).


                                    </p>

                                </div>
                                <div className="testi">
                                    <h4>Where does it come from?</h4>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                                        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                                        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                        <br />
                                        <br />
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "
                                        de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the
                                        1914 translation by H. Rackham.


                                    </p>

                                </div>
                                <div className="testi">
                                    <h4>Where can I get some?</h4>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                        , or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                        isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chun.

                                    </p>

                                </div>
                            </div>

                        </div>
                    </section>
                    {/* testimonial section end here */}
                </section>
                <Footer />
            </section>
        </>
    )
}

export default TermsnCondition