import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import createGame from "../../api/createGame";
import { useRouter } from "next/router";
import "antd/dist/antd.css";

const GameAddForm = () => {
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const game = {
            title: model.title,
            startTime: model.startTime,
            endTime: model.endTime,
            code: model.code,
            prize: model.prize,
            maxTry: model.maxTry,
            sponsor: model.sponsor,
        }
        const res = await createGame(game);
        if (res) {
            router.push("/games");
        }
    };
    const schema = new SimpleSchema({
        title: {
            type: String,
            label: 'Title',
        },
        startTime: {
            type: Date,
        },
        endTime: {
            type: Date,
            custom: function () {
                if (this.value < this.field('startTime').value) {
                    return {
                        type: 'custom',
                        message: 'End time must be after start time',
                    };
                }
            }
        },
        code: {
            type: Number,
            optional: true,
        },
        prize: {
            type: Number,
            min: 0,
        },
        maxTry: {
            type: Number,
            min: 0,
        },
        sponsor: {
            type: Object,
            optional: true,
        },
        'sponsor.url': {
            type: String,
            custom: function () {
                if (!this.value.startsWith("http")) {
                    return {
                        type: 'custom',
                        message: 'URL must start with http',
                    };
                }
            }
        },
        'sponsor.logo': {
            type: String,
            custom: function () {
                if (!this.value.startsWith("http")) {
                    return {
                        type: 'custom',
                        message: 'URL must start with http',
                    };
                }
            }
        },
    });
    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(schema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default GameAddForm;